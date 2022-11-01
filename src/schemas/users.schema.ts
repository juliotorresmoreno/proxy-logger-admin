
import { Schema } from './schema';

export const UserSchema: Schema = {
    columns: [
        {
            name: "id",
            displayName: "ID",
            style: {
                width: 100
            }
        },
        {
            name: "name",
            displayName: "Name"
        }
    ],
    endpoint: 'users'
}
