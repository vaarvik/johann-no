export function generateClassNamesByStringOrObject<T>(
  value: T,
  styles: { [key: string]: string },
  baseClass: string,
) {
  if (!value) {
    throw new Error(
      `Value is defined. Value: ${value}. BaseClass: ${baseClass}`,
    );
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return [generateClassName(value, styles, baseClass)];
  }

  if (typeof value === 'object') {
    return generateClassNamesFromObject(value, styles, baseClass);
  }

  return [];
}

function generateClassName(
  value: string | number,
  styles: { [key: string]: string },
  baseClass: string,
) {
  const className = styles[`${baseClass}-${value}`];

  if (!className) {
    throw new Error(
      `No valid class name (${className}) found in passed in styles with baseClass: ${baseClass}, value: ${value}`,
    );
  }

  return className;
}

function generateClassNamesFromObject<T>(
  value: T,
  styles: { [key: string]: string },
  baseClass: string,
) {
  const classNames: string[] = [];
  for (const key in value) {
    classNames.push(
      ...generateClassNamesByStringOrObject(
        value[key],
        styles,
        `${baseClass}-${key}`,
      ),
    );
  }
  return classNames;
}
