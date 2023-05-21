import * as React from "react";

import { BrandIcons } from "../Icons/Brands";

export function ProductPlatforms({
  platformNames,
}: {
  platformNames: string[];
}) {
  return (
    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
      {platformNames.map((name) => {
        const p = name as "windows" | "macosx" | "linux";
        return <>{BrandIcons[p]}</>;
      })}
    </div>
  );
}
