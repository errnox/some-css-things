class CreateMetrics < ActiveRecord::Migration
  def change
    create_table :metrics do |t|
      t.string :name
      t.string :description
      t.integer :value
      t.boolean :active

      t.timestamps
    end
  end
end
