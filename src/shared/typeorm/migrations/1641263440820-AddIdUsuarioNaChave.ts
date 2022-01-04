import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddIdUsuarioNaChave1641263440820 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'chaves',
      new TableColumn({
        name: 'id_usuario',
        type: 'uuid',
        isNullable: false,
      }),
    );
    await queryRunner.createForeignKey(
      'chaves',
      new TableForeignKey({
        name: 'UsuarioChave',
        columnNames: ['id_usuario'],
        referencedTableName: 'usuarios',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('chaves', 'UsuarioChave');
    await queryRunner.dropColumn('chaves', 'id_usuario');
  }
}
