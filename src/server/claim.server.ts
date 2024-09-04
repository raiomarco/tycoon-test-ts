import { CollectionService } from "@rbxts/services";

for (const claimButton of CollectionService.GetTagged("claim")) {
	if (claimButton.IsA("Part")) {
		claimButton.Touched.Connect((part) => {
			if (part.Parent?.FindFirstChildOfClass("Humanoid")) {
				const player = part.Parent.FindFirstChildOfClass("Humanoid")?.Parent?.Name;

				if (player) {
					claimButton.Parent?.SetAttribute("owner", player);
					claimButton.Transparency = 1;
					claimButton.CanCollide = false;
					claimButton.CanTouch = false;

					print(`Claimed by ${player}`);
				} else {
					print("Claimed by unknown player");
				}
			}
		});
	}
}
