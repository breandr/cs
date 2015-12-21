function isChildElement(childElement, parentElement){
    if(childElement.parentElement === parentElement) return true;

    return !childElement.parentElement ? false : isChildElement(childElement.parentElement, parentElement);
}
