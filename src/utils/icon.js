import { createElement, Heart, Menu, Search, User, ShoppingBag} from 'lucide';

const iconMap = {
    heart: Heart,
    menu: Menu,
    search: Search,
    user: User,
    'shopping-bag': ShoppingBag
}

export function createIcon(name, className = '') {
    const iconData = iconMap[name];
    if(!iconData) return document.createElement("span")
    const svgNode = createElement(iconData);
    if(className) svgNode.classList.add(className)
    return svgNode
}