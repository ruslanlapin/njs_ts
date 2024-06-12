import {StudentType} from "../02/02";
import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
};

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn =(s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}

// ЭТОТ КОД К УДАЛЕННОМУ ТЕСТУ ИЗ ФАЙЛА 03_02.test.ts
// export const demolishHousesOnTheStreet = () => {
//
// }

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export function toFireStaff (bulding: GovernmentBuildingsType, staffCountToFire: number) {
    bulding.staffCount -= staffCountToFire;
}

export function toHireStaff(buldings: GovernmentBuildingsType, staffCountToHire: number) {
    buldings.staffCount += staffCountToHire;
}