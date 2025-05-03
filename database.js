/**
 * NxtOasis Database
 * This file serves as a central database for all product and category information
 * Used across the website for dynamic content loading
 */

const NxtOasisDatabase = {
    // Product Data
    products: [
        {
            id: 'B00036',
            name: 'B00036 Backpack',
            category: 'business',
            color: 'Black',
            capacity: '17.5 L',
            laptop: '15.6"',
            keyFeature: 'Honeycomb Back',
            price: 2899,
            image: './imgs/backbag.jpg',
            images: [
                'https://via.placeholder.com/400x400?text=B00036-1',
                'https://via.placeholder.com/400x400?text=B00036-2',
                'https://via.placeholder.com/400x400?text=B00036-3'
            ],
            description: 'Premium business backpack with dedicated laptop compartment and organized pockets. Perfect for daily commuting and business travel.',
            inStock: true,
            isNew: true,
            featured: true
        },
        {
            id: 'B00152',
            name: 'B00152 Sling Bag',
            category: 'sling',
            color: 'Black',
            capacity: '13 L',
            laptop: '',
            tablet: '10.9"',
            keyFeature: 'Large Size, RFID',
            price: 1699,
            image: './imgs/slingbag.jpg',
            images: [
                'https://via.placeholder.com/400x400?text=B00152-1',
                'https://via.placeholder.com/400x400?text=B00152-2',
                'https://via.placeholder.com/400x400?text=B00152-3'
            ],
            description: 'Versatile sling bag with anti-theft features. Comfortable for all-day wear with ergonomic design.',
            inStock: true,
            isNew: false,
            featured: true
        },
        {
            id: 'B00423',
            name: 'B00423 Backpack',
            category: 'business',
            color: 'Black',
            capacity: '25 L',
            laptop: '15.6"',
            keyFeature: 'Trolley Strap, Bottle Holder',
            price: 69.99,
            image: 'https://via.placeholder.com/400x400?text=B00423',
            images: [
                'https://via.placeholder.com/400x400?text=B00423-1',
                'https://via.placeholder.com/400x400?text=B00423-2',
                'https://via.placeholder.com/400x400?text=B00423-3'
            ],
            description: 'Professional business backpack with premium organization features and water-resistant exterior.',
            inStock: true,
            isNew: false,
            featured: true
        },
        {
            id: 'LX00037',
            name: 'LX00037 Duffle Bag',
            category: 'travel',
            color: 'Black',
            capacity: '38 L',
            laptop: '17"',
            keyFeature: 'Water & Scratch Resistant',
            price: 79.99,
            image: 'https://via.placeholder.com/400x400?text=LX00037',
            images: [
                'https://via.placeholder.com/400x400?text=LX00037-1',
                'https://via.placeholder.com/400x400?text=LX00037-2',
                'https://via.placeholder.com/400x400?text=LX00037-3'
            ],
            description: 'Spacious duffle bag with dedicated shoe compartment and wet pocket. Great for weekend getaways.',
            inStock: true,
            isNew: true,
            featured: true
        },
        {
            id: 'LX00021',
            name: 'LX00021 Duffle Bag',
            category: 'travel',
            color: 'Black',
            capacity: '42 L',
            laptop: '17"',
            keyFeature: '2-in-1 Conversion Bag',
            price: 89.99,
            image: 'https://via.placeholder.com/400x400?text=LX00021',
            images: [
                'https://via.placeholder.com/400x400?text=LX00021-1',
                'https://via.placeholder.com/400x400?text=LX00021-2',
                'https://via.placeholder.com/400x400?text=LX00021-3'
            ],
            description: 'Convertible duffle bag that transforms into a backpack. Ideal for versatile travel needs.',
            inStock: true,
            isNew: false,
            featured: false
        },
        {
            id: 'XD00180',
            name: 'XD00180 Hand Bag',
            category: 'sling',
            color: 'Black',
            capacity: '2.5 L',
            keyFeature: 'Leather Handheld',
            price: 35.99,
            image: 'https://via.placeholder.com/400x400?text=XD00180',
            images: [
                'https://via.placeholder.com/400x400?text=XD00180-1',
                'https://via.placeholder.com/400x400?text=XD00180-2',
                'https://via.placeholder.com/400x400?text=XD00180-3'
            ],
            description: 'Premium leather hand bag with minimalist design. Perfect for everyday essentials.',
            inStock: true,
            isNew: false,
            featured: false
        },
        {
            id: 'XD00795',
            name: 'XD00795 Backpack',
            category: 'sport',
            color: 'Black',
            capacity: '32 L',
            laptop: '15.6"',
            keyFeature: 'Detachable Buckle, Anti-theft',
            price: 75.99,
            image: 'https://via.placeholder.com/400x400?text=XD00795',
            images: [
                'https://via.placeholder.com/400x400?text=XD00795-1',
                'https://via.placeholder.com/400x400?text=XD00795-2',
                'https://via.placeholder.com/400x400?text=XD00795-3'
            ],
            description: 'Versatile sport backpack with anti-theft features and water-resistant fabric. Great for urban adventures.',
            inStock: true,
            isNew: true,
            featured: true
        },
        {
            id: 'YK00098',
            name: 'YK00098 Sling Bag',
            category: 'sling',
            color: 'Black',
            capacity: '3.5 L',
            keyFeature: 'Anti-theft, Water Resistant',
            price: 39.99,
            image: 'https://via.placeholder.com/400x400?text=YK00098',
            images: [
                'https://via.placeholder.com/400x400?text=YK00098-1',
                'https://via.placeholder.com/400x400?text=YK00098-2',
                'https://via.placeholder.com/400x400?text=YK00098-3'
            ],
            description: 'Compact sling bag with hidden pockets and water-resistant exterior. Perfect for travel and everyday use.',
            inStock: true,
            isNew: false,
            featured: false
        },
        {
            id: 'XD00298',
            name: 'XD00298 Camera Bag',
            category: 'laptop',
            color: 'Black',
            capacity: '6.5 L',
            tablet: '11"',
            keyFeature: 'Tripod mount',
            price: 59.99,
            image: 'https://via.placeholder.com/400x400?text=XD00298',
            images: [
                'https://via.placeholder.com/400x400?text=XD00298-1',
                'https://via.placeholder.com/400x400?text=XD00298-2',
                'https://via.placeholder.com/400x400?text=XD00298-3'
            ],
            description: 'Professional camera bag with customizable dividers and tripod attachment. Designed for photographers on the go.',
            inStock: true,
            isNew: false,
            featured: false
        },
        {
            id: 'YK00198',
            name: 'YK00198 Sling Bag',
            category: 'sling',
            color: 'Black',
            capacity: '2.8 L',
            keyFeature: 'Detachable key holder',
            price: 34.99,
            image: 'https://via.placeholder.com/400x400?text=YK00198',
            images: [
                'https://via.placeholder.com/400x400?text=YK00198-1',
                'https://via.placeholder.com/400x400?text=YK00198-2',
                'https://via.placeholder.com/400x400?text=YK00198-3'
            ],
            description: 'Minimalist sling bag with smart organization and detachable key holder. Sleek urban design.',
            inStock: true,
            isNew: true,
            featured: false
        },
        {
            id: 'XD00092',
            name: 'XD00092 Sling Bag',
            category: 'sling',
            color: 'Black',
            capacity: '4 L',
            tablet: '7.9"',
            keyFeature: 'Padded & weight bearing',
            price: 45.99,
            image: 'https://via.placeholder.com/400x400?text=XD00092',
            images: [
                'https://via.placeholder.com/400x400?text=XD00092-1',
                'https://via.placeholder.com/400x400?text=XD00092-2',
                'https://via.placeholder.com/400x400?text=XD00092-3'
            ],
            description: 'Comfortable padded sling bag designed for all-day wear. Features tablet pocket and multiple organizer compartments.',
            inStock: true,
            isNew: false,
            featured: false
        },
        {
            id: 'B00538',
            name: 'B00538 Backpack',
            category: 'business',
            color: 'Black',
            capacity: '20 L',
            laptop: '15.6"',
            keyFeature: 'Top Design',
            price: 65.99,
            image: 'https://via.placeholder.com/400x400?text=B00538',
            images: [
                'https://via.placeholder.com/400x400?text=B00538-1',
                'https://via.placeholder.com/400x400?text=B00538-2',
                'https://via.placeholder.com/400x400?text=B00538-3'
            ],
            description: 'Premium business backpack with sleek design and excellent organization. Features comfort-padded back panel.',
            inStock: true,
            isNew: false,
            featured: false
        },
        {
            id: 'B00528',
            name: 'B00528 Backpack',
            category: 'business',
            color: 'Black',
            capacity: '20 L',
            laptop: '16.5"',
            keyFeature: 'USB Port',
            price: 69.99,
            image: 'https://via.placeholder.com/400x400?text=B00528',
            images: [
                'https://via.placeholder.com/400x400?text=B00528-1',
                'https://via.placeholder.com/400x400?text=B00528-2',
                'https://via.placeholder.com/400x400?text=B00528-3'
            ],
            description: 'Modern business backpack with integrated USB charging port. Stay connected on the go.',
            inStock: true,
            isNew: true,
            featured: false
        },
        {
            id: 'CBO0357',
            name: 'CBO0357 Backpack',
            category: 'sport',
            color: 'Black-Gray',
            capacity: '25 L',
            laptop: '17.3"',
            keyFeature: 'Anti-theft, Expandable',
            price: 79.99,
            image: 'https://via.placeholder.com/400x400?text=CBO0357',
            images: [
                'https://via.placeholder.com/400x400?text=CBO0357-1',
                'https://via.placeholder.com/400x400?text=CBO0357-2',
                'https://via.placeholder.com/400x400?text=CBO0357-3'
            ],
            description: 'Expandable sport backpack with anti-theft features. Ideal for gym, travel, and daily use.',
            inStock: true,
            isNew: false,
            featured: false
        },
        {
            id: 'B00360',
            name: 'B00360 Backpack',
            category: 'business',
            color: 'Black',
            capacity: '25 L',
            laptop: '17.3"',
            keyFeature: 'RFID Ballistic Nylon, Durable',
            price: 85.99,
            image: 'https://via.placeholder.com/400x400?text=B00360',
            images: [
                'https://via.placeholder.com/400x400?text=B00360-1',
                'https://via.placeholder.com/400x400?text=B00360-2',
                'https://via.placeholder.com/400x400?text=B00360-3'
            ],
            description: 'High-end business backpack made from ballistic nylon. Features RFID protection and premium organization.',
            inStock: true,
            isNew: false,
            featured: false
        }
    ],

    // Category Data
    categories: [
        { id: 'business', name: 'Business Backpack', count: 22, image: './imgs/s2.jpeg' },
        { id: 'laptop', name: 'Laptop Messenger Bag', count: 17, image: 'https://via.placeholder.com/400x400?text=Laptop+Messenger' },
        { id: 'sling', name: 'Men\'s Sling Bag', count: 22, image: 'https://via.placeholder.com/400x400?text=Sling+Bag' },
        { id: 'new', name: 'New Release', count: 15, image: 'https://via.placeholder.com/400x400?text=New+Release' },
        { id: 'sport', name: 'Sport Casual Backpack', count: 8, image: 'https://via.placeholder.com/400x400?text=Sport+Backpack' },
        { id: 'travel', name: 'Travel Backpack', count: 24, image: 'https://via.placeholder.com/400x400?text=Travel+Backpack' },
        { id: 'waist', name: 'Waist Bag', count: 9, image: 'https://via.placeholder.com/400x400?text=Waist+Bag' }
    ],

    // Company Information
    companyInfo: {
        name: 'NxtOasis',
        foundedYear: 2009,
        indiaPartner: 'Holeon Trading Pvt Ltd',
        emails: {
            sales: 'sales@snxtoasis.com',
            marketing: 'marketing@nxtoasis.com'
        },
        phones: {
            india: '+91-9876543210',
            support: '+91-9123456789'
        },
        addresses: {
            factory: {
                address: 'Floor 1-3, Building A, No. 12, Zhenxing North Road, Zhenxing Village, Shiling Town, Guangzhou, Guangdong, China'
            },
            office: {
                china: 'Room 1301-2A, block D, (excluding A4 property hotel tower) Pearl River Plaza Hotel area, Shangjing community, Longcheng street, Longgang District, Shenzhen, China',
                india: '191, CASABLANCA, 39th Main, 1st Cross, Behind Central Silk Board, BTM Layout 2nd Stage, Bengaluru, Karnataka 568'
            }
        },
        socialMedia: {
            facebook: 'https://facebook.com/NxtOasis',
            instagram: 'https://instagram.com/NxtOasis_official',
            youtube: 'https://youtube.com/NxtOasis'
        },
        about: {
            shortDescription: 'Founded in 2009, NxtOasis has grown to become a leading brand in the bags industry, offering premium, durable products for modern consumers.',
            history: 'Founded in 2009, NxtOasis, with its unwavering commitment to superior craftsmanship and creating stylish, functional, and durable bags, started as a small workshop. By 2015, it entered the Indian market under the auspices of Holeon Trading Pvt Limited. Through consistent innovation and strategic brand development, NxtOasis rapidly ascended to become the second leading brand in the men\'s backpack category on Amazon India by 2023.',
            mission: 'To create high-quality, innovative, and functional bags that meet the diverse needs of modern consumers while maintaining a commitment to sustainability and excellence.',
            vision: 'To be recognized globally as the premier brand for stylish, durable, and innovative bags that enhance the lives of our customers.'
        }
    },

    // Utility Functions
    utils: {
        // Get product by ID
        getProductById: function(productId) {
            return this.products.find(product => product.id === productId) || null;
        },

        // Get products by category
        getProductsByCategory: function(categoryId) {
            if (categoryId === 'new') {
                return this.products.filter(product => product.isNew);
            }
            return this.products.filter(product => product.category === categoryId);
        },

        // Get featured products
        getFeaturedProducts: function() {
            return this.products.filter(product => product.featured);
        },

        // Get new releases
        getNewReleases: function() {
            return this.products.filter(product => product.isNew);
        },

        // Get category by ID
        getCategoryById: function(categoryId) {
            return this.categories.find(category => category.id === categoryId) || null;
        },

        // Get all categories
        getAllCategories: function() {
            return this.categories;
        },

        // Search products
        searchProducts: function(query) {
            query = query.toLowerCase();
            return this.products.filter(product => 
                product.name.toLowerCase().includes(query) || 
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query) ||
                product.keyFeature.toLowerCase().includes(query)
            );
        },

        // Format price
        formatPrice: function(price) {
            return price.toFixed(2);
        },

        // Calculate product count by category
        getProductCountByCategory: function() {
            const countMap = {};
            this.categories.forEach(category => {
                if (category.id === 'new') {
                    countMap[category.id] = this.getNewReleases().length;
                } else {
                    countMap[category.id] = this.getProductsByCategory(category.id).length;
                }
            });
            return countMap;
        },

        // Sort products by criteria
        sortProducts: function(products, criteria) {
            const sortedProducts = [...products];
            
            switch (criteria) {
                case 'price-low-high':
                    sortedProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high-low':
                    sortedProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'name-a-z':
                    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-z-a':
                    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'newest':
                    sortedProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                    break;
                default:
                    // Default sort by featured
                    sortedProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
            }
            
            return sortedProducts;
        },
        
        // Filter products by price range
        filterProductsByPrice: function(products, minPrice, maxPrice) {
            return products.filter(product => 
                product.price >= minPrice && product.price <= maxPrice
            );
        },
        
        // Filter products by features
        filterProductsByFeature: function(products, feature) {
            return products.filter(product => 
                product.keyFeature.toLowerCase().includes(feature.toLowerCase())
            );
        },
        
        // Paginate products
        paginateProducts: function(products, page, itemsPerPage) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            return products.slice(startIndex, endIndex);
        }
    }
};

// Make database utilities available in the global scope
const getProductById = NxtOasisDatabase.utils.getProductById.bind(NxtOasisDatabase);
const getProductsByCategory = NxtOasisDatabase.utils.getProductsByCategory.bind(NxtOasisDatabase);
const getFeaturedProducts = NxtOasisDatabase.utils.getFeaturedProducts.bind(NxtOasisDatabase);
const getNewReleases = NxtOasisDatabase.utils.getNewReleases.bind(NxtOasisDatabase);
const getCategoryById = NxtOasisDatabase.utils.getCategoryById.bind(NxtOasisDatabase);
const getAllCategories = NxtOasisDatabase.utils.getAllCategories.bind(NxtOasisDatabase);
const searchProducts = NxtOasisDatabase.utils.searchProducts.bind(NxtOasisDatabase);
const formatPrice = NxtOasisDatabase.utils.formatPrice.bind(NxtOasisDatabase);
const getProductCountByCategory = NxtOasisDatabase.utils.getProductCountByCategory.bind(NxtOasisDatabase);
const sortProducts = NxtOasisDatabase.utils.sortProducts.bind(NxtOasisDatabase);
const filterProductsByPrice = NxtOasisDatabase.utils.filterProductsByPrice.bind(NxtOasisDatabase);
const filterProductsByFeature = NxtOasisDatabase.utils.filterProductsByFeature.bind(NxtOasisDatabase);
const paginateProducts = NxtOasisDatabase.utils.paginateProducts.bind(NxtOasisDatabase);