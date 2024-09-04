import { CollectionService, Players } from "@rbxts/services";

for (const collector of CollectionService.GetTagged("collector")) {
	if (collector.IsA("Part")) {
		collector.Touched.Connect((part) => {
			if (part.GetAttribute("value")) {
				const player = Players.FindFirstChild(collector.Parent?.GetAttribute("owner") as string);
				if (player) {
					const leaderstats = player.FindFirstChild("leaderstats");
					if (leaderstats) {
						const money = leaderstats.FindFirstChild("Money") as IntValue;
						if (money) {
							money.Value += part.GetAttribute("value") as number;
						}
					}
				}

				part.Destroy();
				print("sold");
			}
		});
	}
}
