'use strict';
module.exports = function(roomType) {
    switch (roomType) {
        case 'Office':
            return [{
                itemName: 'desk',
                hasItem: false
            }, {
                itemName: 'chair',
                hasItem: false
            }]
        case 'Bedroom':
            return [{
                itemName: 'Headboard',
                hasItem: false
            }, {
                itemName: 'Bedframe',
                hasItem: false
            }, {
                itemName: 'Dresser',
                hasItem: false
            }, {
                itemName: 'Chest',
                hasItem: false
            }, {
                itemName: 'Armoir',
                hasItem: false
            }, {
                itemName: 'Nightstand',
                hasItem: false
            }, {
                itemName: 'Vanity',
                hasItem: false
            }, {
                itemName: 'Rug',
                hasItem: false
            }]
        case 'Kitchen':
            return [{
                itemName: 'sink',
                hasItem: false
            }, {
                itemName: 'refrigerator',
                hasItem: false
            }]
        case 'Dinning Room':
            return [{
                itemName: 'Dinning table',
                hasItem: false
            }, {
                itemName: 'Cabinet',
                hasItem: false
            }]
        case 'Living Room':
            return [{
                itemName: 'Coffee Table',
                hasItem: false
            }, {
                itemName: 'Sofa',
                hasItem: false
            }, {
                itemName: 'love seat',
                hasItem: false
            }]
    }

}