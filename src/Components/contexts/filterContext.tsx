import { useReducer, ReactNode, createContext, useContext } from 'react';

const initialState: FilterObj = {
    experience: undefined,
    roles: [],
    salary: undefined,
    location: [],
    company: undefined,
};

type ActionType = 'SET_EXPERIENCE' | 'ADD_ROLE' | 'REMOVE_ROLE' | 'ADD_LOCATION' | 'REMOVE_LOCATION' | 'SET_COMPANY' | 'SET_SALARY';

interface Action<K extends keyof FilterObj> {
    type: ActionType,
    payload: FilterObj[K];
}

function filterReducer(state: FilterObj, action: Action<keyof FilterObj>): FilterObj {
    switch (action.type) {
        case 'SET_EXPERIENCE': {
            const { payload } = action
            if (state.experience === payload) return state;
            return { ...state, experience: action.payload as number };
        }
        case 'SET_SALARY': {
            const { payload } = action
            if (state.salary === payload) return state;
            return { ...state, salary: action.payload as number };
        }
        case 'SET_COMPANY': {
            const { payload } = action
            if (state.company === payload) return state;
            return { ...state, company: action.payload as string };
        }
        case 'ADD_ROLE': {
            const { payload } = action
            if (state.roles.includes(payload as string)) return state;
            return { ...state, roles: [...action.payload as string[]] };
        }
        case 'ADD_LOCATION': {
            const { payload } = action
            if (state.location.includes(payload as string)) return state;
            return { ...state, location: [...action.payload as string[]] };
        }
        case 'REMOVE_ROLE': {
            const { payload } = action
            if (!state.roles.includes(payload as string)) return state;
            return { ...state, roles: state.roles.filter(item => item !== action.payload as string) };
        }
        case 'REMOVE_LOCATION': {
            const { payload } = action
            if (!state.location.includes(payload as string)) return state;
            return { ...state, location: state.roles.filter(item => item !== action.payload as string) };
        }

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}


const FilterContext = createContext<FilterObj | undefined>(undefined);
const FilterDispatchContext = createContext<React.Dispatch<Action<keyof FilterObj>> | undefined>(undefined);


export function FilterProvider(props: { children: ReactNode }) {
    const [state, dispatch] = useReducer(filterReducer, initialState);

    return (
        <FilterContext.Provider value= { state } >
        <FilterDispatchContext.Provider value={ dispatch }>
            { props.children }
        </FilterDispatchContext.Provider>
        </FilterContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFilter() {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error('useRefs must be used within a ToolProvider');
    }
    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFilterDispatch() {
    const context = useContext(FilterDispatchContext);
    if (context === undefined) {
        throw new Error('useRefDispatch must be used within a ToolProvider');
    }
    return context;
}

FilterContext.displayName = 'FilterContext';

