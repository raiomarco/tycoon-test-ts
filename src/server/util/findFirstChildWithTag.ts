export function FindFirstChildWithTag(instance: Instance, tag: string) {
	const children = instance.GetChildren();
	for (const child of children) {
		if (child.HasTag("spawner")) {
			return child;
		}
	}
	return undefined;
}
