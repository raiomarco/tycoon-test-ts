import { CollectionService, Debris, Workspace } from "@rbxts/services";
import { FindFirstChildWithTag } from "server/util/findFirstChildWithTag";

while (true) {
	task.wait(1);
	print("Dropping");

	for (const dropper of CollectionService.GetTagged("dropper")) {
		if (dropper.GetAttribute("unlocked")) {
			const part = FindFirstChildWithTag(dropper, "spawner") as Part;
			if (part) {
				const newPart = new Instance("Part");
				newPart.SetAttribute("value", dropper.GetAttribute("value"));
				newPart.BrickColor = (dropper.FindFirstChild("Part") as Part)?.BrickColor;
				newPart.Parent = Workspace;
				newPart.Position = part.Position.add(new Vector3(0, -1, 0));
				print("Spawned");
				Debris.AddItem(newPart, 10);
			}
		}
	}
}
