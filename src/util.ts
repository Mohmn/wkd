
function jobFallsUnderThisFilter(jobData: JobDetails, filterObj: FilterObj): boolean {

    const { experience, roles, salary, location: filterLocation } = filterObj;
    const {
        maxJdSalary,
        minJdSalary,
        location,
        minExp,
        maxExp,
        jobRole,
        // companyName,
    } = jobData;
    // console.log('ss', salary, maxJdSalary, minJdSalary)

    // let showJob = false;
    const conditions = [];
    if (salary) {
        if (maxJdSalary && minJdSalary)
            conditions.push(maxJdSalary >= salary);
        else if (minJdSalary)
            conditions.push(minJdSalary >= salary);
        else if (maxJdSalary)
            conditions.push(maxJdSalary >= salary);
    }

    if (experience) {
        // console.log('exppp',experience,minExp,maxExp);
        if (minExp)
            conditions.push(experience >= minExp);
        else if (maxExp)
            conditions.push(experience <= maxExp);
    }
    if (filterLocation.length) {
        console.log('rrr',filterLocation,location)
        if (location) {
            if (filterLocation.includes('remote'))
                conditions.push(location === 'remote');
            else if(filterLocation.includes('OnSite'))
                conditions.push(location !== 'remote');
        }
    }

    if (roles.length) {
        // console.log('rrr',jobRole,roles)
        if (jobRole)
            conditions.push(roles.includes(jobRole))
    }

    for (let i = 0; i < conditions.length; i++)
        if (!conditions[i]) return false;
    return true;
}

function userHasAppliedSomeFilter(filterObj: FilterObj) {

    const { experience, roles, salary, location } = filterObj;
    if (experience || salary) return true;
    if (roles.length > 0 || location.length > 0) return true;
    return false;
}


export {
    jobFallsUnderThisFilter,
    userHasAppliedSomeFilter
}