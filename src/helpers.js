import { useState, useEffect } from 'react';

export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
}

export const useDebounce = (value) => {
    const [state, setState] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setState(value), 1500);

        return () => clearTimeout(handler);
    }, [value]);

    return state;
}
