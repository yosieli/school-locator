class CreateSchools < ActiveRecord::Migration[5.2]
  def change
    create_table :schools do |t|

      t.timestamps
    end
  end
end
