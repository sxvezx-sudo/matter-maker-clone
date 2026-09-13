export function getCollectionData() {
    return [
        {
            id: "col-001",
            name: "Haunted Dollhouse",
            slug: "haunted-dollhouse",
            banner: {
                video: "/assets/video/haunteddollhouse.mp4"
            },
        },
        {
            id: "col-002",
            name: "MM Crew",
            slug: "mmcrew",
            banner: {
                image: "/assets/video/mmcrew.webp"
            },
        },
        {
            id: "col-003",
            name: "Hotdog",
            slug: "hotdog",
            banner: {
                video: "/assets/video/hotdog.mp4"
            },
        }
    ]
}

export function groupProductsByCollection(products) {  
    return products.reduce((acc, product) => {
        const key = product.collectionSlug;
        acc[key] ??= []
        acc[key].push(product)
        return acc    
    }, {})
}

export function getCollection(products, collections) {
    const groupedProducts = groupProductsByCollection(products);

    return collections.map(col => ({
        ...col,
        products: groupedProducts[col.slug] ?? []
    }))
}