import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { NextRequest, NextResponse } from 'next/server';
import { createUser, deleteUser, updateUser } from '@/lib/actions/user.actions';
import { clerkClient  } from '@clerk/nextjs/server';

export async function POST(req: NextRequest) {
    try {
        const evt = await verifyWebhook(req);
        const { id } = evt.data;
        const eventType = evt.type;
        const payload = await req.json();
        const body = JSON.stringify(payload);


        // CREATE
        if (eventType === "user.created") {
            const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;

            const user = {
                clerkId: id,
                email: email_addresses[0]?.email_address,
                username: username!,
                firstName: first_name ?? "",
                lastName: last_name ?? "",
                photo: image_url,
            };
            const newUser = await createUser(user);

            // Set public metadata
            const clerk = await clerkClient();
            await clerk.users.updateUserMetadata(id, {
                publicMetadata: {
                    userId: newUser._id,
                },
            });

            return NextResponse.json({ message: "OK", user: newUser });
        }

        // UPDATE
        if (eventType === "user.updated") {
            const { id, image_url, first_name, last_name, username } = evt.data;

            const user = {
                firstName: first_name,
                lastName: last_name,
                username: username!,
                photo: image_url,
            };

            const updatedUser = await updateUser(id, user);

            return NextResponse.json({ message: "OK", user: updatedUser });
        }

        // DELETE
        if (eventType === "user.deleted") {
            const { id } = evt.data;

            const deletedUser = await deleteUser(id!);

            return NextResponse.json({ message: "OK", user: deletedUser });
        }

        console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
        console.log("Webhook body:", body);

    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error verifying webhook', { status: 400 });
    }
}
