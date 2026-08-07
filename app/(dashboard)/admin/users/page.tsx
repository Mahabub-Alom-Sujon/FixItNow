import { getAllUsers } from "../_actions/getUsers";
import UsersTable from "../_components/UsersTable";

export default async function UsersPage() {
    const data = await getAllUsers();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Users</h1>
                <p className="text-muted-foreground">
                    Manage all registered users.
                </p>
            </div>

            <UsersTable users={data.data} />
        </div>
    );
}