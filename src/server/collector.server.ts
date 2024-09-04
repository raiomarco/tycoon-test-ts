import { CollectionService } from "@rbxts/services";

for (const collector of CollectionService.GetTagged("collector")) {
	if (collector.IsA("Part")) {
		collector.Touched.Connect((part) => {
			if (part.Parent?.FindFirstChildOfClass("Part")) {
				part.Destroy();
				print("sold");
			}
		});
	}
}
