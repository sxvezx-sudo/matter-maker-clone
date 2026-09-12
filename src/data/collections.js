export function getCollectionData() {
    return [
        {
            id: "col-001",
            name: "Haunted Dollhouse",
            slug: "haunted-dollhouse",
            video: "/assets/video/haunteddollhouse.mp4",
        },
        {
            id: "col-001",
            name: "Haunted Dollhouse",
            slug: "haunted-dollhouse",
            video: "/assets/video/haunteddollhouse.mp4",
        },
        {
            id: "col-001",
            name: "Haunted Dollhouse",
            slug: "haunted-dollhouse",
            video: "/assets/video/haunteddollhouse.mp4",
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