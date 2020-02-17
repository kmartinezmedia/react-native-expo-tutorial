import React, { useState } from "react";
import { noop } from "lodash";

interface TabBarContextInterface {
  isTabBarVisible: boolean;
  setTabBarVisibility: Function;
}

export const TabBarContext = React.createContext<TabBarContextInterface>({
  isTabBarVisible: true,
  setTabBarVisibility: noop
});

const TabBarProvider = ({
  children
}: {
  children: React.ReactElement<any>;
}) => {
  const [isTabBarVisible, setTabBarVisibility] = useState<boolean>(true);
  return (
    <TabBarContext.Provider value={{ isTabBarVisible, setTabBarVisibility }}>
      {children}
    </TabBarContext.Provider>
  );
};

export default TabBarProvider;
