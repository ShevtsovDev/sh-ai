import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Service} from "../../service/entities/service.entity";

@Entity()
export class GenerateProcess {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    status: number

    @Column()
    response: string

    @Column()
    request: string

    @Column()
    user_id: number

    @OneToOne(() => Service, service => service.id)
    @JoinColumn({name: 'service'})
    service: Service

}
