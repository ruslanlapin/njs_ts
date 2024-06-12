import {CityType} from "../02/02_02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType;

beforeEach(() => {
    city = {
        title: "NewYork",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            }, {
                buildedAt: 2020, repaired: false,
                address: {number: 200, street: {title: "Happy street"}}
            }
            ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                    address: {
                        street: {
                            title: "Central Str"}}
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "Souths str"}}
            }
        ],
        citizensNumber: 100000
    }
})

// 01. Создайте в отдельном файле функцию, чтобы тесты прошли
test ("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

// 01. Тесты должны пройти
test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], - 100000);
    
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

// ЭТОТ ТЕСТ ДИМЫЧ УДАЛИЛ
// 01. дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. создайте в том же файле ещё одну функию, чтобы тесты прошли
// test.skip("Houses should be destroyed", () => {
//     demolishHousesOnTheStreet(city, "Happy street");
//
//     expect(city.houses.length).toBe(1);
//     expect(city.houses[0].id).toBe(1);
//
// })

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("House should be repared", () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy()
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("staff should be increased", () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("House should be increased", () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
})