/* 
  Usage:

  1. Create a modifiers object where the key is the property name
  and the value is the style you want to apply if the prop is present.

  const modifierConfig = getModifierStyles({
    isFullWidth: {
      width: '100%'
    }
  })
  
  2. Pass in modifier config in styled-component creation
  const View = styled(View)(getModifierStyles)

  3. Add property to component to inherit styles from modifier config
  <View isFullWidth />
*/

export default function getModifierStyles(modifiers: any) {
  return (props: any) => {
    if (!modifiers) return {};
    return memo(() => {
      if (!props) return {};
      return Object.keys(modifiers)
        .filter(m => Object.keys(props).includes(m))
        .reduce((prev, next) => {
          return { ...prev, ...modifiers[next] };
        }, {});
    }, [props]);
  };
}

const memoizedResults = new Map();
function memo(fn: Function, deps: any[]) {
  // there are two unique factors to the computation, first the function itself then the dependencies

  // First memorize results based on FN
  const memoizedResultsBasedOnFn =
    memoizedResults.get(fn) ||
    (memoizedResults.set(fn, new Map()) && memoizedResults.get(fn));

  // Then get/set results based on dependencies to each individual function
  return (
    memoizedResultsBasedOnFn.get(deps) ||
    (memoizedResultsBasedOnFn.set(deps, fn()) &&
      memoizedResultsBasedOnFn.get(deps))
  );
}
