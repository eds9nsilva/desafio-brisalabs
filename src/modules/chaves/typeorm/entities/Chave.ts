import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Usuario from '@modules/usuario/typeorm/entities/Usuario';

@Entity('chaves')
class Chaves {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  chave: string;

  @Column()
  id_usuario: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Chaves;
