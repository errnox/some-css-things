# require File.dirname(__FILE__) + "/../config/application"
Rails.application.require_environment!


$redisListener = Redis.new(:host => 'localhost', :port => 6379)

redisListenerTask = Daemons.call(:multiple => true) do

  # Subscribe to Redis.
  $redisListener.subscribe('redis-metric-change-upstream') do |on|
    on.message do |channel, message|
      metric = JSON.parse(message)

      new_metric = Metric.find_by id: metric['id']
      new_metric.name = metric['name']
      new_metric.description = metric['description']
      new_metric.value = metric['value']
      new_metric.save!

    end
  end
end

# The daemon can now be adviced to start/stop manually.
# Example:
#   redisListenerTask.start

# Any future Redis clients can subscribe using the following pattern:
#
# futureRedisClientTask = Daemon.call do
#   $futureRedisClient.subscribe('reddis-channel') do |on|
#     on.message do |event, data|
#       # Do your thing!
#     end
#   end
# end
