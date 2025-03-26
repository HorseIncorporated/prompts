import json
import prompty
# to use the serverless invoker make
# sure to install prompty like this:
# pip install prompty[serverless]
import prompty.serverless
from prompty.tracer import trace, Tracer, console_tracer, PromptyTracer

# add console and json tracer:
# this only has to be done once
# at application startup
Tracer.add("console", console_tracer)
json_tracer = PromptyTracer()
Tracer.add("PromptyTracer", json_tracer.tracer)

# if your prompty file uses environment variables make
# sure they are loaded properly for correct execution

@trace
def run(
      code: any
) -> str:

  # execute the prompty file
  result = prompty.execute(
    "flow-chart.diagram.prompty",
    inputs={
      "code": code
    }
  )

  return result

if __name__ == "__main__":
   json_input = '''{
    "code": "export class Car {\\n  public model: string;\n  public year: number;\n  public color: string;\n  public mileage: number;\n  public fuelType: string;\n  constructor(\n    model: string,\n    year: number,\n    color: string,\n    mileage: number,\n    fuelType: string\n  ) {\n    this.model = model;\n    this.year = year;\n    this.color = color;\n    this.mileage = mileage;\n    this.fuelType = fuelType;\n  }\n  public start(): string {\n    return `${this.model} is starting.`;\n  }\n  public stop(): string {\n    return `${this.model} is stopping.`;\n  }\n  public drive(distance: number): string {\n    this.mileage += distance;\n    return `${this.model} has driven ${distance} miles.`;\n  }\n  public refuel(amount: number): string {\n    return `${this.model} has been refueled with ${amount} gallons of ${this.fuelType}.`;\n  }\n}\n"
  }'''
   args = json.loads(json_input)

   result = run(**args)
   print(result)
