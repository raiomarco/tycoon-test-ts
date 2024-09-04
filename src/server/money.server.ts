import { Players } from "@rbxts/services";

Players.PlayerAdded.Connect((player) => {
	print(`Player ${player.Name} joined`);

	const leaderstats = new Instance("Folder");
	leaderstats.Name = "leaderstats";
	leaderstats.Parent = player;

	const money = new Instance("IntValue");
	money.Name = "Money";
	money.Parent = leaderstats;
	money.Value = 0;
});
