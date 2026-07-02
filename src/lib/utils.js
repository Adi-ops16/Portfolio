/**
 * Converts a project title to a URL-safe slug.
 * "Swift-Tix" → "swift-tix", "Toy verse" → "toy-verse"
 * @param {string} title
 * @returns {string}
 */
export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Required recruiter fields that must be present on every project */
export const REQUIRED_FIELDS = [
  'slug', 'role', 'problem', 'solution', 'outcomes',
  'challenges', 'techDecisions', 'architectureOverview',
  'duration', 'teamSize', 'featured',
];

/**
 * Validates a project object in development. Warns on missing fields.
 * @param {{ title: string, [key: string]: unknown }} project
 */
export function validateProject(project) {
  if (process.env.NODE_ENV !== 'production') {
    for (const field of REQUIRED_FIELDS) {
      if (project[field] === undefined || project[field] === null) {
        console.warn(
          `[projectsData] Project "${project.title}" is missing required field: "${field}"`
        );
      }
    }
  }
}
