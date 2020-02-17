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

const memorizedResults = new Map();
function memo(fn: Function, deps: any[]) {
  // there are two unique factors to the computation, first the function itself then the dependencies

  // First memorize results based on FN
  const memorizedResultsBasedOnFn =
    memorizedResults.get(fn) ||
    (memorizedResults.set(fn, new Map()) && memorizedResults.get(fn));

  // Then get/set results based on dependencies to each individual function
  return (
    memorizedResultsBasedOnFn.get(deps) ||
    (memorizedResultsBasedOnFn.set(deps, fn()) &&
      memorizedResultsBasedOnFn.get(deps))
  );
}
