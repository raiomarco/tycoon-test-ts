import { CollectionService } from "@rbxts/services";

for (const droperModel of CollectionService.GetTagged("droper")) {
	for (const droperPart of droperModel.GetChildren()) {
		if (droperPart.IsA("Part")) {
			droperPart.Transparency = 1;
			droperPart.CanCollide = false;
		}
	}
}

for (const button of CollectionService.GetTagged("butao")) {
	if (button.IsA("Part")) {
		button.Touched.Connect((part) => {
			print("Touched");
			if (part.Parent?.FindFirstChildOfClass("Humanoid")) {
				print("by Humanoid");
				for (const droperModel of CollectionService.GetTagged("droper")) {
					print("droper");
					for (const droperPart of droperModel.GetChildren()) {
						print("part");
						if (droperPart.IsA("Part")) {
							droperPart.Transparency = 0;
							droperPart.CanCollide = true;
						}
					}
				}
			}

			button.Transparency = 1;
			button.CanCollide = false;
			button.CanTouch = false;
		});
	}
}
