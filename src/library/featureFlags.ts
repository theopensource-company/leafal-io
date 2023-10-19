import {
  FeatureFlags,
  FeatureFlagSchema,
} from "@theopensource-company/feature-flags";
import z from "zod";

// Either prod, preview (staging & PRs) or dev
// mode = production should only be true for the main branch
// prod should be true when deployed, otherwise we are locally in dev mode
export const Mode = z.union(
  [z.literal("production"), z.literal("staging"), z.literal("development")],
  {
    invalid_type_error:
      "Mode must be either production, staging or development",
  }
);

export type Mode = z.infer<typeof Mode>;
export const environment = Mode.parse(import.meta.env.MODE);


// Schema for feature flags
// follow https://github.com/theopensource-company/feature-flags

export const schema = {
  preLaunch: {
    options: [true, false],
  },
} satisfies FeatureFlagSchema;

export const featureFlags = new FeatureFlags({
  schema,
  environment,
  defaults: {
    development: {
      preLaunch: false,
    },
    preview: {
      preLaunch: false,
    },
  },
});
