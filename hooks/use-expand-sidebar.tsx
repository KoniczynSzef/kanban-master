"use client";

// * This hook is used to expand or collapse the sidebar and save the state in the local storage

// prettier-ignore
export function useExpandSidebar(isExpanded: boolean, setIsExpanded: (expanded: boolean) => void) {
	console.log("isExpanded", isExpanded);
	
    return () => {        
        window.localStorage.setItem("isExpanded", (!isExpanded).toString())
        setIsExpanded(!isExpanded)
    }
}
