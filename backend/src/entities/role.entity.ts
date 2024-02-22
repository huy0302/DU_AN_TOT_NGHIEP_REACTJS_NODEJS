import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permission } from "./permission.entity";
import { User } from "./user.entity";

@Index('roles_pkey', ['id'], { unique: true })
@Entity('roles')
export class Role {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	guard_name: string;

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
	created_at: Date;

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
	updated_at: Date;

	@ManyToMany(type => Permission)
	@JoinTable({
		name: 'role_has_permissions',
		joinColumn: { name: 'role_id', referencedColumnName: 'id' },
		inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'id' },
	})
	permissions: Permission[];

	@ManyToMany(type => User)
	@JoinTable({
		name: 'user_roles',
		joinColumn: { name: 'role_id', referencedColumnName: 'id' },
		inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
	})
	users: User[];
}
