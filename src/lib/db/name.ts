import { User_Model } from "./models";

export async function change_name(
	user_id: string,
	name: string
): Promise<{ error: string } | { name: string }> {
	const user = await User_Model.findOne({ _id: user_id });
	if (!user) {
		return { error: "User could not be found" };
	}
	user.name = name;
	try {
		await user.save();
		return { name };
	} catch (err) {
		return { error: err as string };
	}
}
