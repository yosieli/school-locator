class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :password_digest
      t.string :zip_code
      t.string :current_grade
      t.timestamps
    end
    add_index :users, :first_name, unique: true
  end
end
