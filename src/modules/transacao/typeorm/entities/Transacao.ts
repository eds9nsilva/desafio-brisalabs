import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('transacao')
class Transacao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  valor: number;

  @Column()
  id_chave_origem: string;

  @Column()
  id_chave_destino: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transacao;
