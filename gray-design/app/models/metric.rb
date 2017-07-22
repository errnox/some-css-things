class Metric < ActiveRecord::Base
  # Publish to Redis on changes.
  # after_create { |metric| metric.message 'create' }
  after_update { |metric| metric.message 'update' }
  # after_destroy { |metric| metric.message 'descroy' }

  # Publish an action to Redis
  #
  # action - String representing the action.
  #
  # Example:
  #  message('create')
  #
  # Returns nothing.
  def message(action)
    msg = {
      :resource => 'metrics',
      :action => action,
      :name => self.name,
      :description => self.description,
      :value => self.value,
      :id => self.id,
    }

    begin
      Daemons.call(:multiple => true) do
        $redisSender.publish 'redis-metric-change-downstream', msg.to_json
      end
    rescue
      # Ignore it.
    end
  end
end
