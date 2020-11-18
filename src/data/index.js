import juice from '../assets/images/juice.png'
import bag from '../assets/images/bag.png'

const data = {
    9893833530194: {
        image: juice,
        productName: 'Fresh Mango Juice',
        price: 329,
        impact: 'low',
        tags: ['FDA Approved', 'Organic'],
        Description:
            'Fresh juice made from organic practices and family production should be favoured more compared to ones made using industrial practices. This juice is certainly more eco friendly than industrial produced juice due to the environmental impact processing sugar has. Avoid added sugar at all costs and enjoy the nutritional value of your drink! ',
        co2: 0.5,
        water: 1.02,
    },
    5282854042806: {
        image: bag,
        productName: 'Eco friendly bag',
        price: 100,
        impact: 'low',
        tags: ['Sedex Approved', 'Reusable'],
        Description:
            'The more times you use a bag, the more environmentally friendly it becomes. Take care of your bags and don’t accumulate more than you need. Polypropylene bags are a good choice when considering a reusable alternative. After only 14 uses this bag is already more eco friendly than conventional plastic bags.',
        co2: 33,
        water: 220,
        per: '1000 bags',
    },
}

export default data
