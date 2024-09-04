import { CollectionService, Players } from "@rbxts/services";

for (const upgradeModel of CollectionService.GetTagged("upgrade")) {
	const upgradeID = upgradeModel.GetAttribute("upgradeId" as string);
	if (!upgradeID) continue;

	upgradeModel.AddTag(upgradeID as string);

	for (const upgradePart of upgradeModel.GetChildren()) {
		if (upgradePart.IsA("Part")) {
			upgradePart.Transparency = 1;
			upgradePart.CanCollide = false;
		}
		upgradeModel.SetAttribute("unlocked", false);
	}
}

for (const button of CollectionService.GetTagged("button")) {
	const upgradeID = button.GetAttribute("upgradeId" as string);
	if (!upgradeID) continue;

	if (button.IsA("Part")) {
		button.Touched.Connect((part) => {
			if (part.Parent?.FindFirstChildOfClass("Humanoid")) {
				const playerName = part.Parent.FindFirstChildOfClass("Humanoid")?.Parent?.Name;

				if (!playerName) return;

				if (button.Parent?.GetAttribute("owner") !== playerName) {
					print("not owner");
					return;
				}

				const player = Players.GetPlayerFromCharacter(part.Parent);

				if (player) {
					const leaderstats = player.FindFirstChild("leaderstats");
					if (leaderstats) {
						const money = leaderstats.FindFirstChild("Money") as IntValue;
						if (money && money.Value >= (button.GetAttribute("price") as number)) {
							money.Value -= button.GetAttribute("price") as number;
						} else {
							print("not enough money");
							return;
						}
					}
				}

				for (const upgradeModel of CollectionService.GetTagged(upgradeID as string)) {
					print("upgrade");
					for (const upgradePart of upgradeModel.GetChildren()) {
						if (upgradePart.IsA("Part")) {
							upgradePart.Transparency = 0;
							upgradePart.CanCollide = true;
						}
						upgradeModel.SetAttribute("unlocked", true);
					}
				}
				print("unlocked");
			}

			button.Transparency = 1;
			button.CanCollide = false;
			button.CanTouch = false;
		});
	}
}
