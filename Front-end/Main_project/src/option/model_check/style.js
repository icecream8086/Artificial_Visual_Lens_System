/**
 * Represents a StyleChecker object that validates CSS dimensions.
 */
class StyleChecker {
    validate_cssDimensions(width, height) {
        const cssDimensionPattern = /^(\d+(.\d+)?)(px|em|%|cm|mm|in|pt|pc|ex|ch|rem|vh|vw|vmin|vmax)$/;
        const widthMatch = cssDimensionPattern.exec(width);
        const heightMatch = cssDimensionPattern.exec(height);

        if (!widthMatch || !heightMatch) {
          throw new Error('Invalid CSS dimensions');
        }

        if (widthMatch[3] !== heightMatch[3]) {
          throw new Error('CSS dimensions must have the same units');
        }
    }
}
module.exports = {StyleChecker};
