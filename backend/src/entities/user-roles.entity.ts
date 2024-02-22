import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("user_roles_unique", ["role_id", "user_id"], { unique: true })
@Index('user_roles_pkey', ['id'], { unique: true })

@Entity('user_roles')
export class UserRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role_id: number | 0;

    @Column()
    user_id: number | 0;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
}
