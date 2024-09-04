import { CollectionService, Workspace } from "@rbxts/services";

while (true) {
	wait(1);
	print("Dropping");

	for (const dropper of CollectionService.GetTagged("dropper")) {
		if (dropper.GetAttribute("unlocked")) {
			const part = dropper.FindFirstChild("spawner") as Part;
			if (part) {
				const newPart = new Instance("Part");
				newPart.Parent = Workspace;
				newPart.Position = part.Position.add(new Vector3(0, -1, 0));
				print("Spawned");
			}
		}
	}
}
