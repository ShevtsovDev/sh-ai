import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Service} from "../../service/entities/service.entity";

@Entity()
export class GenerateProcess {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    status: number

    @Column({type: "json"})
    response;

    @Column({type: "json"})
    request

    @Column()
    user_id: number

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updated_at: Date;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    created_at: Date;

    @OneToOne(() => Service, service => service.id)
    @JoinColumn({name: 'service'})
    service: Service

}
