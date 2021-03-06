import {Events, Message} from './Messages';
import {RequestIdHelper} from './RequestIdHelper';

export class TerminalStatusRequest
{
    ToMessage()
    {
        var data = {};

        return new Message(RequestIdHelper.Id("trmnl"), Events.TerminalStatusRequest, data, true);
    }
}

export class TerminalStatusResponse
{
    constructor(m)
    {
        this._m = m;
    }
    GetStatus()
    {
        return this._m.Data.status;
    }
    GetBatteryLevel()
    {
        return parseInt(this._m.Data.battery_level,10);
    }
    IsCharging()
    {
        return !!this._m.Data.charging;
    }
}

export class TerminalBattery
{
    constructor(m)
    {
        this.BatteryLevel = parseInt(m.Data.battery_level,10);
    }
}
