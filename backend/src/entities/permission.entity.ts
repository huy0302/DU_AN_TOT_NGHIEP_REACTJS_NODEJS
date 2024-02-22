import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entity";

@Index('permissions_pkey', ['id'], { unique: true })
@Entity('permissions')
export class Permission {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	guard_name: string;

	@Column( {name: "group_name"})
	group: string;

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
	created_at: Date;

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
	updated_at: Date;

	@ManyToMany(type => Role)
	@JoinTable({
		name: 'role_has_permissions',
		joinColumn: { name: 'permission_id', referencedColumnName: 'id' },
		inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
	})
	roles: Role[];
}
