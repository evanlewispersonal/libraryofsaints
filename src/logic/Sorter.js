
export const alphabetise = (a, b, options = {}) => {
    // Set the options using the nullish coalescing operator
    const ignoreA = options.ignore_a ?? true; // Ignore articles at the beginning of strings by default
    const emptyFirst = options.empty_first ?? false; // Put empty strings last by default
    const caseSensitive = options.case_sensitive ?? false; // Compare strings case-insensitively by default
    const ignoresaintandprophet = options.ignoresaintandprophet ?? true; // Compare strings case-insensitively by default

    // Check for exact equality
    if (a === b) {
        return 0;
    }

    // Handle empty strings
    if (!a) {
        return emptyFirst ? -1 : 1;
    }

    if (!b) {
        return emptyFirst ? 1 : -1;
    }

    if (ignoresaintandprophet) {
        a = a.replace(/St\. /, '')
        b = b.replace(/St\. /, '')

        a = a.replace(/Prophet /, '')
        b = b.replace(/Prophet /, '')
    }

    // .replace(/The Adventure of /,'')

    // Clip the strings if needed
    let clippedA = ignoreA ? a.replace(/['"“‘’”]/g, '').replace(/^(A|An|The)\s+/, '').replace(/^(\$|£|—)/, '') : a;
    let clippedB = ignoreA ? b.replace(/['"“‘’”]/g, '').replace(/^(A|An|The)\s+/, '').replace(/^(\$|£|—)/, '') : b;
    
    // Compare the clipped strings
    if (clippedA.localeCompare(clippedB, undefined, { sensitivity: caseSensitive ? 'case' : 'base' }) === 0) {
        return 0;
    }

    return clippedA.localeCompare(clippedB, undefined, { sensitivity: caseSensitive ? 'case' : 'base' });
};