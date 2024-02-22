import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("role_has_permissions_unique", ["role_id", "permission_id"], { unique: true })
@Entity('role_has_permissions')
export class RolePermission {

	@PrimaryGeneratedColumn('increment',{name: "id"})
	id: number;
	
    @Column()
    role_id: number | 0;

    @Column()
    permission_id: number | 0;
}
