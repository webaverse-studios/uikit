import merge from 'deepmerge';

export interface MergeOptions extends merge.Options {
  cloneUnlessOtherwiseSpecified: <T>(value: T, options: MergeOptions) => T;
}

export default function combineMerge<T>(target: T[], source: T[], options?: MergeOptions) {
  const destination = target.slice();

  source.forEach((item, index) => {
    if (typeof destination[index] === 'undefined') {
      destination[index] = options?.cloneUnlessOtherwiseSpecified(item, options) as T;
    } else if (options?.isMergeableObject && options?.isMergeableObject(item as object)) {
      destination[index] = merge(target[index], item, options);
    } else if (target.indexOf(item) === -1) {
      destination.push(item);
    }
  });

  return destination;
}
