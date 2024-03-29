/**
 * Taken from: https://github.com/substack/semver-compare/blob/master/index.js
 * Compares two versions.
 *
 * @param a Current version
 * @param b Expected version
 */
export function semverCompare(a: string, b: string): Number {
    var pa = a.split(".");
    var pb = b.split(".");
    for (var i = 0; i < 3; i++) {
        var na = Number(pa[i]);
        var nb = Number(pb[i]);
        if (na > nb) return 1;
        if (nb > na) return -1;
        if (!isNaN(na) && isNaN(nb)) return 1;
        if (isNaN(na) && !isNaN(nb)) return -1;
    }
    return 0;
}
